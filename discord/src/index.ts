import { client } from "./client.js";
import { listChannels } from "./tools/listChannels.js";
import { searchChannels } from "./tools/searchChannels.js";
import { getChannelHistory } from "./tools/getChannelHistory.js";
import { getChannelHistoryByTime } from "./tools/getChannelHistoryByTime.js";
import { getThreadHistory } from "./tools/getThreadHistory.js";
import { listUsers } from "./tools/listUsers.js";
import { searchUsers } from "./tools/searchUsers.js";
import { sendMessage } from "./tools/sendMessage.js";
import { sendMessageInThread } from "./tools/sendMessageInThread.js";

async function login(): Promise<void> {
  await client.login(process.env.DISCORD_TOKEN);
}

async function main() {
  try {
    const command = process.argv[2];

    try {
      await login();
    } catch (error: any) {
      if (command === "login") {
        if (error instanceof Error) {
          console.log(JSON.stringify({ error: error.message }));
        } else {
          console.log(JSON.stringify({ error: String(error) }));
        }
        process.exit(0);
      }
      throw error;
    }

    switch (command) {
      case "listChannels":
        console.log(await listChannels());
        break;
      case "searchChannels":
        console.log(await searchChannels());
        break;
      case "getChannelHistory":
        console.log(await getChannelHistory());
        break;
      case "getChannelHistoryByTime":
        console.log(await getChannelHistoryByTime());
        break;
      case "getThreadHistory":
        console.log(await getThreadHistory());
        break;
      case "listUsers":
        console.log(await listUsers());
        break;
      case "searchUsers":
        console.log(await searchUsers());
        break;
      case "sendMessage":
        console.log(await sendMessage());
        break;
      case "sendMessageInThread":
        console.log(await sendMessageInThread());
        break;
      case "login":
        console.log("Successfully logged in to Discord"); // login happens earlier in this function
        break;
      default:
        throw new Error(`Unknown command: ${command}`);
    }

    process.exit(0);
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
}

main();
