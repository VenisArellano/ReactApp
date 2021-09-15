import {useContext} from "react";
import {OCContext} from "./OcProvider";

export default function useOC() {
    return useContext(OCContext)
}