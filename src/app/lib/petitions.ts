import { Urls } from "./urls";
import { Data, Electorate } from "./interfaces";

async function getElectoratesByCp(postcode: string, state: string) {
  //llama al endpoint de electgorates by cp
  const requestOptions: RequestInit = {
    method: "GET",
  };
  const response = await fetch(
    `${Urls.electoratesByCp}?state=${state}&postcode=${postcode}`,
    requestOptions
  );

  const data = await response.json();
  return data.data;
}
async function getRepsByElectorate(electorates: Electorate[]) {
  //llama al endpoint de reps by electorate
  const data = electorates.map((el) => {
    return el.division;
  });
  const payload = await fetch(`${Urls.repsByElectorate}?electorate=${[data]}`);
  const repsData = await payload.json();
  return repsData.data;
}
async function getReps(electorate: string) {
  //llama al endpoint de reps by cp
  const payload = await fetch(
    `${Urls.repsByElectorate}?electorate=${electorate}`
  );
  const repsData = await payload.json();
  return repsData.data;
}
async function createLeads(data: Data) {
  //llama al endpoint de reps by cp
  const requestOptions: RequestInit = {
    method: "POST",
  };
  const payload = await fetch(
    `${Urls.leadsCreate}?firstName=${data.fristName ? data.fristName : "NA"}
    &postalcode=${data.postcode ? data.postcode : "NA"}
    &emailData=${data?.emailData ? data.emailData : "NA"}
    &representative=${data?.representative ? data?.representative : "NA"}
    &emailMessage=${data.emailMessage ? JSON.stringify(data.emailMessage) : "NA"}
    &sended=${data.sended}
    &subject=${data.subject ? data.subject : "NA"}
    &city=${data.city ? data.city : "NA"}
    &party=${data.party ? data.party : "NA"}
    &clientId=${data.clientId ? data.clientId : "NA"}`,
    requestOptions
  );
  return;
}
export { getElectoratesByCp, getRepsByElectorate, getReps, createLeads };
