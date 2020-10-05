
MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Architecture" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Architecture]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Authentication" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Authentication]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Session" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Session]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Access" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Access]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Validation" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Validation]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Cryptography" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Cryptography]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Error" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Error]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Data" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Data]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Communications" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Communications]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Malicious" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Malicious]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="BusLogic" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_BusLogic]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Files" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Files]->(b);


MATCH (a:Asvs),(b:Asvs) WHERE a.stage="API" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_API]->(b);

MATCH (a:Asvs),(b:Asvs) WHERE a.stage="Config" AND a.cweId=b.cweId AND NOT (a.description=b.description) AND NOT (a.stage=b.stage) MERGE (a)-[:Verify_Config]->(b);