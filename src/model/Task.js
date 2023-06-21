/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Task model module.
 * @module model/Task
 * @version 1.0.0
 */
class Task {
    /**
     * Constructs a new <code>Task</code>.
     * @alias module:model/Task
     * @param tname {String} 
     * @param ttype {String} 
     * @param tperson {String} 
     * @param tpriority {String} 
     * @param tstatus {String} 
     */
    constructor(tname, ttype, tperson, tpriority, tstatus) { 
        
        Task.initialize(this, tname, ttype, tperson, tpriority, tstatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tname, ttype, tperson, tpriority, tstatus) { 
        obj['tname'] = tname;
        obj['ttype'] = ttype;
        obj['tperson'] = tperson;
        obj['tpriority'] = tpriority;
        obj['tstatus'] = tstatus;
    }

    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Task} obj Optional instance to populate.
     * @return {module:model/Task} The populated <code>Task</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('tname')) {
                obj['tname'] = ApiClient.convertToType(data['tname'], 'String');
            }
            if (data.hasOwnProperty('ttype')) {
                obj['ttype'] = ApiClient.convertToType(data['ttype'], 'String');
            }
            if (data.hasOwnProperty('tperson')) {
                obj['tperson'] = ApiClient.convertToType(data['tperson'], 'String');
            }
            if (data.hasOwnProperty('tpriority')) {
                obj['tpriority'] = ApiClient.convertToType(data['tpriority'], 'String');
            }
            if (data.hasOwnProperty('tstatus')) {
                obj['tstatus'] = ApiClient.convertToType(data['tstatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Task.prototype['_id'] = undefined;

/**
 * @member {String} tname
 */
Task.prototype['tname'] = undefined;

/**
 * @member {String} ttype
 */
Task.prototype['ttype'] = undefined;

/**
 * @member {String} tperson
 */
Task.prototype['tperson'] = undefined;

/**
 * @member {String} tpriority
 */
Task.prototype['tpriority'] = undefined;

/**
 * @member {String} tstatus
 */
Task.prototype['tstatus'] = undefined;






export default Task;

