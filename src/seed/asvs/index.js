import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch'
import dotenv from 'dotenv';
import { csv } from 'csvtojson';
import gql from 'graphql-tag';

dotenv.config();


const uri = 'http://localhost:4000';

const client = new ApolloClient({
    link: new HttpLink({ uri, fetch }),
    cache: new InMemoryCache()
});


const readASVSData = async () => {
    const fileName = './src/seed/asvs/asvs4.csv'
    const asvsReadPromise = await new Promise((resolve, reject) => {
        csv()
        .fromFile(fileName)
        .then((data)=>{
            resolve(data);
        })
        .catch(err => {
            reject(err);
        })
    });
    return asvsReadPromise;
}

const transformASVSData = async () => {
    const transformASVSPromise = await new Promise((resolve, reject) => {
        readASVSData()
        .then(requirements => {
            requirements.forEach(requirement => {
                requirement.stage = requirement.Name;
                requirement.serial = requirement.Item;
                requirement.L1 = requirement.L1 ? true: false;
                requirement.L2 = requirement.L2 ? true: false;
                requirement.L3 = requirement.L3 ? true: false;
                requirement.cweId = requirement.CWE ? parseInt(requirement.CWE): null
                requirement.nistId = requirement.NIST ? requirement.NIST: null
                requirement.description = requirement.Description;
                // classifier.addDocument(requirement.description);
                // const tokens = requirement.description.tokenizeAndStem();
                // console.log(tokens);

                // Delte keys not required
                delete requirement.Name;
                delete requirement.Item;
                delete requirement.CWE;
                delete requirement.NIST;
                delete requirement.Description;
            })
            // To-Do: NLP for tagging
            // Support Training of documents - Bayes classifier
            // classifier.train();
            resolve(requirements);
        })
        .catch(err => {
            reject(err);
        });
    });
    return transformASVSPromise;
};

const generateMutations = async (records) => {
    return await records.map((rec) => {
        return {
            mutation: gql`
                mutation CreateAsvs(
                    $stage: String!
                    $serial: String!
                    $L1: Boolean!
                    $L2: Boolean!
                    $L3: Boolean!
                    $cweId: Int
                    $nistId: String
                    $description: String!
                ) {
                    pattern: CreateAsvs(
                        stage: $stage,
                        serial: $serial,
                        L1: $L1,
                        L2: $L2,
                        L3: $L3,
                        cweId: $cweId,
                        nistId: $nistId,
                        description: $description
                    ){
                        stage
                        serial   
                    }
                }
            `,
            variables: rec
        }
    })
}

const getAsvsMutations = async () => {
    const mutationsPromise = await new Promise((resolve, reject) => {
        transformASVSData()
        .then(data => {
            console.log("ASVS Data records count:", data.length);
            resolve(generateMutations(data));
        })
        .catch(err => {
            reject(err);
        })
    })
    return mutationsPromise;
};

export const runAsvsMutations = async (type) => {
    const mutations = await getAsvsMutations();
    if(mutations) {
        return Promise.all(
            mutations.map(({mutation, variables}) => {
                return client.mutate({
                    mutation,
                    variables,
                })
                .catch(err => {
                    console.log("could not ASVS Item ", variables.serial);
                    console.log(err);
                })
            })
        );
    }
};