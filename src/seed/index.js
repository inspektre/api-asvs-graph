// Author: Uday Korlimarla
import { runAsvsMutations } from './asvs';

runAsvsMutations()
.then(() => console.log("ASVS Mutations complete"))
.catch(err => console.log(err))
