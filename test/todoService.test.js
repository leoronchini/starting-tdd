const { describe, it, before, afterEach } = require('mocha')
const { expect } = require('chai')
const todoService = require('../src/todoService')
const { createSandbox } = require('sinon')

describe('todoService', () => {
    let sandbox

    before(() => {
        sandbox = createSandbox()
    })

    describe('#list', () => {
        const mockDatabase = [
            {
                name: 'Joao',
                age: 23,
                meta: { revision: 0, created: 1656867645439, version: 0 },
                '$loki': 1
            }
        ]

        let todoService
        beforeEach(() => {
            const dependencies = {
                todoRepository: {
                    list: sandbox.stub().returns(mockDatabase)
                }
            }

            todoService = new todoService(dependencies)
        })

        it('should return data on a specific format', () => {
            const result = todoService.list()
            // excluding 'meta' and 'loki' from array 'mockDatabase' and including the remaining on 'expected' variable
            const [{ meta, $loki, ...expected }] = mockDatabase
            expect(result).to.be.deep.equal(expected)
            
        })
    })
})
