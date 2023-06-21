let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('ieao7').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ieao7")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/edittask/' + transitionId;}};document.getElementById('ijefml').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createtask' ;}};window.onload = () => {apiTaskApi.getAlltask((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ihfj").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tname'){
        subDataElements[i].textContent = data[data.length -i -1].tname;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'ttype']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].ttype;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'ttype'){
        subDataElements[i].textContent = data[data.length -i -1].ttype;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tperson']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tperson;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tperson'){
        subDataElements[i].textContent = data[data.length -i -1].tperson;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tpriority']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tpriority;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tpriority'){
        subDataElements[i].textContent = data[data.length -i -1].tpriority;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};