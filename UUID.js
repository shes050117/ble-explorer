/*
 * Bluetooth UUID
 */
document.addEventListener("DOMContentLoaded", function(event) {
  'use strict';
  autoTestBtn.style.display = 'block';
  //Btn
  var autoTestBtn = document.getElementById('auto-test');
  //expected output
  var expected_output = [];
  // getService Test
  expected_output[0] = '0000beef-0000-1000-8000-00805f9b34fb'; // unsigned long
  expected_output[1] = '00001818-0000-1000-8000-00805f9b34fb'; // cycling_power
  expected_output[2] = '0000180d-0000-1000-8000-00805f9b34fb'; // hear_rate
  // getCharacteristic Test
  expected_output[3] = '00002a2a-0000-1000-8000-00805f9b34fb'; // ieee_11073-20601_regulatory_certification_data_list
// getDescriptor Test
  expected_output[4] = '00002904-0000-1000-8000-00805f9b34fb'; // gatt.characteristic_presentation_format
// canonicalUUID Test
  expected_output[5] = '0000abcd-0000-1000-8000-00805f9b34fb'; // 16-bit alias
  expected_output[6] = '1234abcd-0000-1000-8000-00805f9b34fb'; // 32-bit alias
// Syntax error Test
  expected_output[7] = null;
  expected_output[8] = '0000abcd-0000-1000-8000-00805f9b34fb'; // 16-bit alias
  expected_output[9] = null;


  function check(output, arg, expected_output) {
    var result;
    try {
      result = output(arg);
      if(output(arg) === expected_output)
        console.log('Pass');
      else{
        console.log('Fail');
        console.log('Expected ouput: '+ expected_output);
        console.log('Ouput: '+ result);
      }
    }
    catch(e) {
      console.log('Exception: '+ e);
    }
  }


  autoTestBtn.onclick = function AutoTestClick() {
    console.log('---------btn press, start auto test --------');
    for (var i = 0; i < expected_output.length; i++) {
      console.log('Run ' + i);
      switch(i) {
        case 0:
          check(BluetoothUUID.getService, 0xbeef, expected_output[i]);
          break;
        case 1:
          check(BluetoothUUID.getService, 'cycling_power', expected_output[i]);
          break;
        case 2:
          check(BluetoothUUID.getService, 'hear_rate', expected_output[i]);
          break;
        case 3:
          check(BluetoothUUID.getCharacteristic, 'ieee_11073-20601_regulatory_certification_data_list', expected_output[i]);
          break;
        case 4:
          check(BluetoothUUID.getDescriptor, 'gatt.characteristic_presentation_format', expected_output[i]);
          break;
        case 5:
          check(BluetoothUUID.canonicalUUID, 0xabcd, expected_output[i]);
          break;
        case 6:
          check(BluetoothUUID.canonicalUUID, 0x1234abcd, expected_output[i]);
          break;
        case 7:
          check(BluetoothUUID.getService, 'unknow-service', expected_output[i]);
          break;
        case 8:
          check(BluetoothUUID.getService, 'abcd', expected_output[i]);
          break;
        case 9:
          check(BluetoothUUID.getService, 'ABCD', expected_output[i]);
          break;
        }
    };
  }
}); //DOMContentLoaded
