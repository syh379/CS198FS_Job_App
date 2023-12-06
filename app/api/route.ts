import { withAuth } from "@clerk/nextjs/api";
import { clerkClient } from "@clerk/nextjs";

export default withAuth(async (req: any, res: any) => {
  // Ensure we're handling a POST request
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse the request body
    const { userId, sessionId, getToken } = req.auth;

    // Update the user's metadata using publicMetadata or privateMetadata as appropriate
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        // Assuming you meant to use publicMetadata
        birthday: "11-30-1969",
      },
    });

    // Send a successful response
    res.status(200).json({ success: true });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error });
  }
});
