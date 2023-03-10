<script lang="ts">
    import Button, { Label } from '@smui/button';
    import Dialog, { Title, Content, Actions } from '@smui/dialog';

    import { caudalimetros } from '../../lib/store';

    let open = false;
    let clicked = 'Nothing yet.';

    export let currentCaudal:number;
    export let noriaVel:number;
    export let caudalID:string;
    export let currentUnit: string;
    const rangeUser: number = 20;
    let obj:any[] = [];
    let status:number = 0;
    let unit: string = '';
    let idealCaudal: number = 0;
    
    const fastCaudal = (userCa:number, velN:number, id:string, cUnit:string):any => {
        const arr = $caudalimetros.filter(el => el.id === id); //look for the limits values of the caudal
        
        unit = cUnit;
        
        //convert meter cubics to liter
        if(unit === 'metro'){
            userCa *= 1000;
        }
        //Rule of three to calculate de caudal necessary to meet the specifications
        idealCaudal = (velN * arr[0].caudal)/arr[0].velNoria; //Obtain the ideal value of caudal for user given noria velocity
        //Design a number for status if meet the specification or not
        if(userCa < idealCaudal){
            status = 0;
        }
        if(userCa >= (idealCaudal + rangeUser)){
            status = 2;
        }
        if(userCa >= idealCaudal && userCa < (idealCaudal + rangeUser)){
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
    {:else if status === 2}
    <strong>CAUDAL ACEPTABLE</strong>
    {/if}
</Title>
<Content id="simple-content">
    {#if unit === 'metro'} 
    Caudal mínimo: <strong>{(idealCaudal/1000).toFixed(2)} m³/h.</strong> 
    {:else} Caudal mínimo: <strong>{idealCaudal} l/h.</strong>
    {/if}
</Content>
<Actions>
   <Button on:click={() => (clicked = 'Yes')}>
    <Label>Close</Label>
  </Button>
</Actions>
</Dialog>


<Button on:click={fastCaudal(currentCaudal, noriaVel, caudalID, currentUnit )} on:click={() => (open = true)} touch variant='raised'>
   <Label>Calcular</Label>
</Button>