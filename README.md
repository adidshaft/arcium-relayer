# Arcium Relayer

A lightweight Node.js relayer service designed to interface between client applications (such as mobile apps) and the Arcium Network. This service handles Zero-Knowledge (ZK) proofs and coordinates with the Arcium MXE Cluster for secure multi-party computation.

## Live Demo

The relayer is currently deployed and live at:
**[https://sovereign-arcium-relayer.onrender.com/](https://sovereign-arcium-relayer.onrender.com/)**

## Features

- **Vote Verification Endpoint**: Accepting ZK proofs and payloads from clients.
- **MPC Cluster Simulation**: Currently simulates the processing delay of the Arcium Multi-Party Computation network (placeholder for full integration).
- **Health Check**: Simple endpoint to verify service status.

## API Endpoints

### 1. Submit Vote Proof
- **URL**: `/api/vote`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "proof": "...",
    "payload": "..."
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Arcium Network Verified Proof",
    "callbackSignature": "mxc_vote_confirmed_<timestamp>"
  }
  ```

### 2. Health Check
- **URL**: `/`
- **Method**: `GET`
- **Response**: `Arcium Relayer is Live`

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adidshaft/arcium-relayer.git
   cd arcium-relayer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node server.js
   ```

The server will start on port `3000` (or the port defined in `PORT` environment variable).

## Future Improvements

- Integration with `@arcium-hq/client` for real-time Solana transaction queuing.
- Enhanced validation for ZK proofs.
