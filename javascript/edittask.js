let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('ieers').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/Home' ;}};document.getElementById('ixhfz').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/createtask' ;}};document.getElementById('io2z2k').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/edittask/','');let task = new TempApi.Task();task['tname'] = document.querySelector("[annotationname = 'tname']").value;task['ttype'] = document.querySelector("[annotationname = 'ttype']").value;task['tperson'] = document.querySelector("[annotationname = 'tperson']").value;task['tpriority'] = document.querySelector("[annotationname = 'tpriority']").value; let opts = {task};apiTaskApi.updatetask( taskId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = tname]').value = response.body.query.tname ;document.querySelector('[annotationname = ttype]').value = response.body.query.ttype ;document.querySelector('[annotationname = tperson]').value = response.body.query.tperson ;document.querySelector('[annotationname = tpriority]').value = response.body.query.tpriority ;{   location.href= '/Home' ;}}});};document.getElementById('iwvnbc').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/edittask/','');
      if(taskId === '/edittask' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iwvnbc")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};window.onload = () => {let taskId = window.location.pathname.replace('/edittask/','');apiTaskApi.gettask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = tname]').value = response.body.query.tname; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = ttype]').value = response.body.query.ttype; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tperson]').value = response.body.query.tperson; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tpriority]').value = response.body.query.tpriority; } catch (e) { console.log(e) };}});};