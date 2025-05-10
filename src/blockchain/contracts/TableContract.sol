// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract TableContract {
    struct Record {
        uint id;
        string data;
    }

    mapping(uint => Record) private records;
    uint private nextId;

    event RecordCreated(uint id, string data);
    event RecordUpdated(uint id, string data);
    event RecordDeleted(uint id);

    constructor() {
        nextId = 1;
    }

    function createRecord(string memory data) public {
        records[nextId] = Record(nextId, data);
        emit RecordCreated(nextId, data);
        nextId++;
    }

    function getRecord(uint id) public view returns (uint, string memory) {
        require(id < nextId, "Record does not exist.");
        Record memory record = records[id];
        return (record.id, record.data);
    }

    function updateRecord(uint id, string memory data) public {
        require(id < nextId, "Record does not exist.");
        records[id].data = data;
        emit RecordUpdated(id, data);
    }

    function deleteRecord(uint id) public {
        require(id < nextId, "Record does not exist.");
        delete records[id];
        emit RecordDeleted(id);
    }

    function getAllRecords() public view returns (Record[] memory) {
        Record[] memory allRecords = new Record[](nextId - 1);
        for (uint i = 1; i < nextId; i++) {
            allRecords[i - 1] = records[i];
        }
        return allRecords;
    }
}
