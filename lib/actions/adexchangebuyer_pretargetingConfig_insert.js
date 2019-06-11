/**
 * Auto-generated action file for "Ad Exchange Buyer" API.
 *
 * Generated at: 2019-05-23T09:12:53.922Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-adexchangebuyer-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'adexchangebuyer.pretargetingConfig.insert'
 * Endpoint Path: '/pretargetingconfigs/{accountId}'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "accountId",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "accountId": "accountId",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "billingId": "billingId",
    "configId": "configId",
    "configName": "configName",
    "creativeType": "creativeType",
    "dimensions": "dimensions",
    "excludedContentLabels": "excludedContentLabels",
    "excludedGeoCriteriaIds": "excludedGeoCriteriaIds",
    "excludedPlacements": "excludedPlacements",
    "excludedUserLists": "excludedUserLists",
    "excludedVerticals": "excludedVerticals",
    "geoCriteriaIds": "geoCriteriaIds",
    "isActive": "isActive",
    "kind": "kind",
    "languages": "languages",
    "minimumViewabilityDecile": "minimumViewabilityDecile",
    "mobileCarriers": "mobileCarriers",
    "mobileDevices": "mobileDevices",
    "mobileOperatingSystemVersions": "mobileOperatingSystemVersions",
    "placements": "placements",
    "platforms": "platforms",
    "supportedCreativeAttributes": "supportedCreativeAttributes",
    "userIdentifierDataRequired": "userIdentifierDataRequired",
    "userLists": "userLists",
    "vendorTypes": "vendorTypes",
    "verticals": "verticals",
    "videoPlayerSizes": "videoPlayerSizes",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'adexchangebuyer.pretargetingConfig.insert',
        pathName: '/pretargetingconfigs/{accountId}',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}