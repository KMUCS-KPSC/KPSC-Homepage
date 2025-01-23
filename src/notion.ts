const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION });

function parseStr(prop: any): String | undefined {
  try {
    if (prop["type"] == "title") return prop["title"][0]["plain_text"];
    if (prop["type"] == "email") return prop["email"];
    if (prop["type"] == "rich_text") return prop["rich_text"][0]["plain_text"];
    if (prop["type"] == "phone_number") return prop["phone_number"];
  } catch (e) {
    return undefined;
  }
  return undefined;
}

function parseNum(prop: any): number | undefined {
  try {
    if (prop["type"] == "number") return prop["number"];
  } catch (e) {
    return undefined;
  }
  return undefined;
}

function parseBool(prop: any): boolean | undefined {
  try {
    if (prop["type"] == "checkbox") return prop["checkbox"];
  } catch (e) {
    return undefined;
  }
  return undefined;
}

async function Query(type: "Member" | "Achievements"): Promise<any> {
  let databaseId;
  if (type == "Member") databaseId = process.env.MEMBERDB;
  if (type == "Achievements") databaseId = process.env.ACHIEVEDB;

  return await notion.databases.query({
    database_id: databaseId,
  });
}

export { Query, parseStr, parseNum, parseBool };
