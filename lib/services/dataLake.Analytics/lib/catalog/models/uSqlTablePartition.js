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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlTablePartition class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL table partition item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [schemaName] Gets or sets the name of the schema
 * associated with this table partition and database.
 * 
 * @member {string} [name] Gets or sets the name of the table partition.
 * 
 * @member {object} [parentName] Gets or sets the Ddl object of the
 * partition's parent.
 * 
 * @member {string} [parentName.firstPart] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {string} [parentName.secondPart] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {string} [parentName.thirdPart] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {string} [parentName.server] Gets or sets the name of the table
 * associated with this database and schema.
 * 
 * @member {number} [indexId] Gets or sets the index ID for this partition.
 * 
 * @member {array} [label] Gets or sets the list of labels associated with
 * this partition.
 * 
 * @member {date} [createDate] Gets or sets the creation time of the partition
 * 
 */
function USqlTablePartition() {
  USqlTablePartition['super_'].call(this);
}

util.inherits(USqlTablePartition, models['CatalogItem']);

/**
 * Defines the metadata of USqlTablePartition
 *
 * @returns {object} metadata of USqlTablePartition
 *
 */
USqlTablePartition.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlTablePartition',
    type: {
      name: 'Composite',
      className: 'USqlTablePartition',
      modelProperties: {
        computeAccountName: {
          required: false,
          serializedName: 'computeAccountName',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        databaseName: {
          required: false,
          serializedName: 'databaseName',
          type: {
            name: 'String'
          }
        },
        schemaName: {
          required: false,
          serializedName: 'schemaName',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'partitionName',
          type: {
            name: 'String'
          }
        },
        parentName: {
          required: false,
          serializedName: 'parentName',
          type: {
            name: 'Composite',
            className: 'DdlName'
          }
        },
        indexId: {
          required: false,
          serializedName: 'indexId',
          type: {
            name: 'Number'
          }
        },
        label: {
          required: false,
          serializedName: 'label',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        createDate: {
          required: false,
          serializedName: 'createDate',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = USqlTablePartition;
