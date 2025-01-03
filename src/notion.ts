const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION });

function parseProp(prop: any): any {
  try {
    if (prop["type"] == "title") return prop["title"][0]["plain_text"];
    if (prop["type"] == "email") return prop["email"];
    if (prop["type"] == "number") return prop["number"];
    if (prop["type"] == "rich_text") return prop["rich_text"][0]["plain_text"];
    if (prop["type"] == "phone_number") return prop["phone_number"];
    if (prop["type"] == "checkbox") return prop["checkbox"];
  } catch (e) {
    return null;
  }
  return null;
}

async function Query(type: "Member" | "Achievements"): Promise<any> {
  let databaseId;
  if (type == "Member") databaseId = process.env.MEMBERDB;
  if (type == "Achievements") databaseId = process.env.ACHIEVEDB;

  return await notion.databases.query({
    database_id: databaseId,
  });
}

export { Query, parseProp };
