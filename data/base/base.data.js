//jshint esversion:6

class BaseData {
    constructor(db, ModelClass,validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }
    getAll() {
        const filter = {};
        const options = {};
        return this.collection.find({ filter, options })
            .toArray();
    }

    create(model) {
        // validate
        if (this._isModelValid && !this._isModelValid(model)) {
            return Promise.reject('invalid model');
        }
        return this.collection.insert(model);
    }

     _isModelValid(model){
        return true;
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;