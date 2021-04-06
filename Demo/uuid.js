const UUID = require('uuidjs')

let uuid = UUID.generate()
console.log(uuid)
// 89311d6e-334c-4a06-aaab-a2e6057dba55

console.log(uuid.toString())
// ba6c02b3-6805-488a-b5e6-ef2fcb13914c

uuid = UUID.parse("a0e0f130-8c21-11df-92d9-95795a3bcd40")
console.log(uuid.hexString)
// a0e0f130-8c21-11df-92d9-95795a3bcd40
console.log(uuid.hexNoDelim)
// a0e0f1308c2111df92d995795a3bcd40
console.log(uuid.bitString)
// 10100000111000001111000100110000100011000010000100010001110111111001001011011001100101010111100101011010001110111100110101000000
console.log(uuid.urn)
// urn:uuid:a0e0f130-8c21-11df-92d9-95795a3bcd40


const v4 = UUID.genV4()
console.log(v4.version, v4)
/**
 4 UUID 
 {
    intFields: 
    [
        3424483412,
        54221,
        19831,
        191,
        180,
        104906595030498,
        timeLow: 3424483412,
        timeMid: 54221,
        timeHiAndVersion: 19831,
        clockSeqHiAndReserved: 191,
        clockSeqLow: 180,
        node: 104906595030498
    ],
    bitFields: 
    [
        '11001100000111010111100001010100',
        '1101001111001101',
        '0100110101110111',
        '10111111',
        '10110100',
        '010111110110100101111000010101001101010111100010',
        timeLow: '11001100000111010111100001010100',
        timeMid: '1101001111001101',
        timeHiAndVersion: '0100110101110111',
        clockSeqHiAndReserved: '10111111',
        clockSeqLow: '10110100',
        node: '010111110110100101111000010101001101010111100010'
    ],
    hexFields: 
    [
        'cc1d7854',
        'd3cd',
        '4d77',
        'bf',
        'b4',
        '5f697854d5e2',
        timeLow: 'cc1d7854',
        timeMid: 'd3cd',
        timeHiAndVersion: '4d77',
        clockSeqHiAndReserved: 'bf',
        clockSeqLow: 'b4',
        node: '5f697854d5e2'
    ],
    version: 4,
    bitString: '11001100000111010111100001010100110100111100110101001101011101111011111110110100010111110110100101111000010101001101010111100010',
    hexNoDelim: 'cc1d7854d3cd4d77bfb45f697854d5e2',
    hexString: 'cc1d7854-d3cd-4d77-bfb4-5f697854d5e2',
    urn: 'urn:uuid:cc1d7854-d3cd-4d77-bfb4-5f697854d5e2'
}
*/

const v1 = UUID.genV1()
console.log(v1.version, v1)
/**
 * 1 UUID
{
    intFields: 
    [
        3325258443,
        38532,
        4587,
        173,
        136,
        230045209338184,
        timeLow: 3325258443,
        timeMid: 38532,
        timeHiAndVersion: 4587,
        clockSeqHiAndReserved: 173,
        clockSeqLow: 136,
        node: 230045209338184
    ],
    bitFields: 
    [
        '11000110001100110110101011001011',
        '1001011010000100',
        '0001000111101011',
        '10101101',
        '10001000',
        '110100010011100110010010111111000010000101001000',
        timeLow: '11000110001100110110101011001011',
        timeMid: '1001011010000100',
        timeHiAndVersion: '0001000111101011',
        clockSeqHiAndReserved: '10101101',
        clockSeqLow: '10001000',
        node: '110100010011100110010010111111000010000101001000'
    ],
    hexFields: 
    [
        'c6336acb',
        '9684',
        '11eb',
        'ad',
        '88',
        'd13992fc2148',
        timeLow: 'c6336acb',
        timeMid: '9684',
        timeHiAndVersion: '11eb',
        clockSeqHiAndReserved: 'ad',
        clockSeqLow: '88',
        node: 'd13992fc2148'
    ],
    version: 1,
    bitString: '11000110001100110110101011001011100101101000010000010001111010111010110110001000110100010011100110010010111111000010000101001000',
    hexNoDelim: 'c6336acb968411ebad88d13992fc2148',
    hexString: 'c6336acb-9684-11eb-ad88-d13992fc2148',
    urn: 'urn:uuid:c6336acb-9684-11eb-ad88-d13992fc2148'
}
 */