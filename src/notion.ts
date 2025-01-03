const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION });

async function QueryMember(): Promise<JSON> {
  const databaseId = process.env.MEMBERDB;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response);
  return response;
}

export { QueryMember };
