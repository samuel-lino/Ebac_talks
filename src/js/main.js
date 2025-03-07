AOS.init();


const datadoevento = new Date("Mar 23, 2025 19:00:00");
const timestampdoevento = datadoevento.getTime();

const contador = setInterval(function(){
    const agora = new Date();
    const timestampatual = agora.getTime();
    
    const distanciadoevento = timestampdoevento - timestampatual;

    const diasemMS = 1000 * 60 * 60 * 24;
    const horasemMS = 1000 * 60 * 60;
    const minemMS = 1000 * 60;
    const segemMS = 1000
    
    const diasateoevento = Math.floor(distanciadoevento / diasemMS);
    const horasateoevento =Math.floor((distanciadoevento % diasemMS/horasemMS));
    const minutosateoevento = Math.floor((distanciadoevento %horasemMS)/ minemMS);
    const segundosateoevento = Math.floor((distanciadoevento%minemMS)/segemMS);

    document.getElementById('contador').innerHTML = `${diasateoevento}d ${horasateoevento}h ${minutosateoevento}m ${segundosateoevento}s`

    if(distanciadoevento < 0){
        clearInterval(contador);
        document.getElementById('contador').innerHTML = 'Evento expirou'
    }

}, 1000);