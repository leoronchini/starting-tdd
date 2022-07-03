const { describe, it, before, afterEach} = require('mocha')
const { expect } = require('chai')
const TodoRepository = require('../src/todoRepository')
const { createSandbox } = require('sinon')

describe('todoRepository', () => {
    let todoRepository
    let sandbox

    before(() => {
        todoRepository = new TodoRepository()
        sandbox = createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    describe('methods signature', () => {
        it('should call insertOne from lokijs', () => {
            const mockDatabase = [
                {
                  name: 'Joao',
                  age: 23,
                  meta: { revision: 0, created: 1656867645439, version: 0 },
                  '$loki': 1
                }
              ]

              const functionName = "find"
              const expectedReturn = mockDatabase
              sandbox.stub(
                todoRepository.schedule,
                functionName
              ).returns(expectedReturn)

              const result = todoRepository.list()
              expect(result).to.be.deep.equal(expectedReturn)
              expect(todoRepository.schedule[functionName].calledOnce).to.be.ok

        })
        it('should call find from lokijs')
    })
})

