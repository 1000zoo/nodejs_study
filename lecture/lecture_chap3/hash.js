const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('10293847alskdjfhqpwoeiruzmxncbvbasdfw!@#!@#$$%%^^').digest('base64'));