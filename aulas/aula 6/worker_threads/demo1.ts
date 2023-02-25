import { isMainThread, Worker } from "worker_threads";

// No exemplo abaixo, note que estamos iremos instanciar um processo para executar este arquivo
// Em seguida, a partir da MainThread criaremos outra instância para este mesmo arquivo
// porém agora em uma nova thread dentro do mesmo processo. Note que o pid será o mesmo.

if (isMainThread) {
    console.log("Main thread", process.pid);
    new Worker("./demo1.ts");
}
else {
    console.log("Worker thread", process.pid);

}
