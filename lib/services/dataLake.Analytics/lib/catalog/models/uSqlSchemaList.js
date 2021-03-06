/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlSchemaList class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL schema item list.
 * @member {array} [value] Gets the list of schemas in the database
 * 
 */
function USqlSchemaList() {
}

util.inherits(USqlSchemaList, Array);

/**
 * Defines the metadata of USqlSchemaList
 *
 * @returns {object} metadata of USqlSchemaList
 *
 */
USqlSchemaList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlSchemaList',
    type: {
      name: 'Composite',
      className: 'USqlSchemaList',
      modelProperties: {
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'USqlSchemaElementType',
                type: {
                  name: 'Composite',
                  className: 'USqlSchema'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = USqlSchemaList;
