import { chain } from "@/app/chain";
import { getContract } from "thirdweb";

import { Client } from "../client";
import { contractABI } from "./contactAbi";

const contractAddress = "0xF63100bfb1AD40630664aA998C7045b299FD3924";

export const contract = getContract({
    client: Client,
    chain:chain,
    address: contractAddress,
    abi: contractABI,
})