import "./styles/style.css";
import "./styles/index.css";
import "@/components/chat-container/chat-container";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <chat-container class="grid h-screen grid-cols-[17rem_1fr] grid-rows-[auto_1fr] bg-primary w-dvw"></chat-container>
`;

// async function main() {
// 	const start = performance.now();
//
// 	// 1) Fetch CSV concurrently
// 	const csvPromise = fetch("qa-dataset.csv").then((res) => res.text());
//
// 	// 2) Load Pyodide concurrently
// 	const pyodidePromise = loadPyodide();
// 	const [csvData, pyodide] = await Promise.all([csvPromise, pyodidePromise]);
//
// 	await Promise.all([
// 		pyodide.loadPackage("pandas"),
// 		pyodide.loadPackage("scikit-learn"),
// 	]);
// 	console.log("CSV data:", csvData);
//
// 	// --- STEP D: Write your CSV to that same directory so it's also persisted ---
// 	pyodide.FS.writeFile("/qa-dataset.csv", csvData, {
// 		encoding: "utf8",
// 	});
//
// 	console.log("CSV file written to Pyodide's filesystem.");
// 	console.log(
// 		pyodide.runPython(`
//             import sys
//             import pandas as pd
//             from sklearn.feature_extraction.text import TfidfVectorizer
//             from sklearn.neighbors import NearestNeighbors
//             sys.version
//         `),
// 	);
// 	pyodide.runPython("print(1 + 2)");
// 	const end = performance.now();
// 	console.log("Load & Init took (sec):", (end - start) / 1000);
// }
//
// main();
// mGT@#n^#imXCda83Wz
