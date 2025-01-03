const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION });

function parseProp(prop: any): any {
  if (prop["type"] == "email") return prop["email"];
  try {
    switch (prop["type"]) {
      case "title":
        return prop["title"][0]["plain_text"];
      case "email":
        return prop["email"];
      case "number":
        return prop["number"];
      case "rich_text":
        return prop["rich_text"][0]["plain_text"];
      case "phone_number":
        return prop["phone_number"];
      case "checkbox":
        return prop["checkbox"];
      default:
        return null;
    }
  } catch (e) {
    return null;
  }
}

async function QueryMember(): Promise<any> {
  const databaseId = process.env.MEMBERDB;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response;
}

export { QueryMember, parseProp };
