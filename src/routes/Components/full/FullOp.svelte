<script lang="ts">
    import Button, { Label } from '@smui/button';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import { subMinutes, timeStringToFloat } from '../../../lib/functionsOfTime';
    import { caudalimetros } from '../../../lib/store';

    let open = false; //material ui specifics
    let clicked = 'Nothing yet.';
    
    export let initialTime:string = '';
    export let finalTime:string = '';
    export let velNoria:number = 0;
    export let initialMeasure:number = 0;
    export let finalMeasure:number = 0;
    export let caudalID:string = 'C001'

    let consumedLiters:number = 0;
    let correction: number = 0;
    let timePass: string = ' ';
    let timePassFloat: number = 0;
    let idealCaudal:number = 0;
    let status: number = 0;
    let litersFinal: number = 0;
    let unit:string = '';

    const test = (iTime:string, fTime:string, vNoria:number, iMeasure:number, fMeasure:number, cID:string):any => {
        const arr = $caudalimetros.filter(el => el.id === cID); //look for the limits values of the caudal
        let rangeUser:number = 20;
        
        unit = arr[0].unit;
        consumedLiters = fMeasure - iMeasure;
        correction = arr[0].correction;
        timePass = subMinutes(fTime, iTime); // Subtraction between both times and then conversion to float
        timePassFloat =timeStringToFloat(timePass);
        litersFinal = Number((consumedLiters / (vNoria * timePassFloat * correction)).toFixed(2));
        //Rule of three to calculate de caudal necessary to meet the specifications
        idealCaudal = arr[0].minCaudal;                           //Obtain the ideal value of caudal for user given noria velocity
               
        //Design a number for status if meet the specification or not
        if(litersFinal < idealCaudal){
            status = 0;
        }
        if(litersFinal >= (idealCaudal + rangeUser)){
            status = 2;
        }
        if(litersFinal >= idealCaudal && litersFinal < (idealCaudal + rangeUser)){
            status = 1;
        } 
    }
</script>

<Dialog
bind:open
aria-labelledby="simple-title"
aria-describedby="simple-content"
>
<!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
<Title id="simple-title">
    {#if status === 0}
    <strong>CAUDAL NO SUFICIENTE</strong>
    {:else if status === 1}
    <strong>CAUDAL SUFICIENTE</strong>
    {:else}
    <strong>CAUDAL ACEPTABLE</strong>
    {/if}
</Title>
<Content id="simple-content">
    <div style="font-size: 17px;">Caudal: <strong>{litersFinal} {unit}</strong></div>
    <div style="font-size: 17px;">Caudal mínimo: <strong>{idealCaudal} {unit}</strong></div>
    <div style="font-size: 17px;">Intervalo de tiempo: <strong>{timePass} horas</strong></div>
    <div style="font-size: 17px;">Litros consumidos: <strong>{consumedLiters} litros</strong></div>
</Content>
<Actions>
   <Button on:click={() => (clicked = 'Yes')}>
    <Label>Close</Label>
  </Button>
</Actions>
</Dialog>


<Button touch variant='raised' on:click={test(initialTime, finalTime, velNoria, initialMeasure, finalMeasure, caudalID)} on:click={() => (open = true)}>
    <Label>Calcular</Label>
 </Button>