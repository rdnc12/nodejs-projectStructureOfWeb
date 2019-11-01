//jshint esversion:6
//youtube 25:50
const { expect } = require('chai');
const sinon = require('sinon');
const BaseData = require('../../../data/base/base.data');

describe('BaseData.getAll()', () => {
        const db = {
            collection: () => {
            }
        };
        let items = [];
        let ModelClass = null;
        const validator = null;
        let data = null;

        const toArray = () => {
            return Promise.resolve(items);
        };
        const find = () => {
            return {
                toArray
            };
        };
    describe('when there are items in db', () => {
        beforeEach(() => {
            items = [1, 2, 3, 4];
            sinon.stub(db, 'collection')
                .callsFake(() => {
                    return { find };
                });

            //arrange
            data = new BaseData(db, ModelClass, validator);
        });

        it('expect to return items', () => {
            // Act
            // Assert
            return data.getAll()
                .then((models) => {
                    expect(models).to.deep.equal(items);
                });
        });
    });
});
