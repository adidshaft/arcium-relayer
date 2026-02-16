const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allows your mobile app to hit the API
app.use(express.json()); // Parses the Android JSON payload

// The Arcium MPC Relayer Endpoint
app.post('/api/vote', async (req, res) => {
    try {
        const { proof, payload } = req.body;
        
        console.log("1. Received ZK Proof from Android:", proof);
        console.log("2. Forwarding to Arcium MXE Cluster...");

        // NOTE: In full production, you would import @arcium-hq/client here
        // to construct the Computation Account and queue the transaction on Solana.
        
        // Simulating the MPC cluster processing delay for the demo
        await new Promise(resolve => setTimeout(resolve, 3500));

        console.log("3. Arcium MPC Computation Finalized.");

        // Return the callback confirmation to the Android App
        res.status(200).json({
            success: true,
            message: "Arcium Network Verified Proof",
            callbackSignature: "mxc_vote_confirmed_" + Date.now()
        });

    } catch (error) {
        console.error("Relayer Error:", error);
        res.status(500).json({ success: false, error: "MPC Computation Failed" });
    }
});

// Health check endpoint for Render
app.get('/', (req, res) => res.send("Arcium Relayer is Live"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Arcium Relayer listening on port ${PORT}`);
});