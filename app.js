var azure = require('azure-storage');

var AZURE_STORAGE_ACCOUNT = '[account_name]'
var AZURE_STORAGE_ACCESS_KEY = '[access_key]';

var blobSvc = azure.createBlobService(AZURE_STORAGE_ACCOUNT,AZURE_STORAGE_ACCESS_KEY);


/**** PUT RESOURCE IN CONTAINER ****/
var filepath = '/path/homer.jpeg';
var resource_name = 'homer.jpeg';
var container = 'containerPoc';

blobSvc.createBlockBlobFromLocalFile(container, resource_name, filepath, function(error, result, response){
  if(!error){ 
    console.log('File uploaded');
  }else {
    console.log(error);
  }
});

/**** LIST OF RESOURCES OF CONTAINER ****/
blobSvc.listBlobsSegmented(container, null, function(error, result, response){
  if(!error){
    console.log(JSON.stringify(result));
  } else {
    console.log(error);
  }
});


