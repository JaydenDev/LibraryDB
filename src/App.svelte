<script>
  import osListImport from "./data";

  let oslist = osListImport;
  oslist.forEach((os) => {
    os.show = true;
  });

  const handleInput = (e) => {
    if (!e.target.value) {
      osListImport.forEach((os, i) => {
        oslist[i].show = true;
      });
    }
    osListImport.forEach((os, i) => {
      if (os.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        oslist[i].show = true;
      } else {
        oslist[i].show = false;
      }
    });
  };
</script>
<div class="headerbar">
  <h1>LibraryDB</h1>
</div>
  <br />
  <input
    placeholder="The search function for this software is not available at this time."
    on:input={handleInput}
    style="color: black;
           width: 100%;"
    type="text"
    id="searchbox"
    name="searchbox"
    list="osdatlist"
    disabled
  />
  <datalist id="osdatlist">
    {#each oslist as os}
      <option>{os.name}</option>
    {/each}
  </datalist>
  <div class="card">
    <table frame="void" rules="rows">
      <tr>
        <th>Name</th>
        <th>Language</th>
        <th>Website</th>
      </tr>
      {#each oslist as os}
        <tr>
          <td>{os.name}</td>
          <td>{os.language}</td>
          <td><a href={os.website}>Website</a></td>
      {/each}
    </table>
  </div>
<style>
  * {
    color: white;
  }
  .card {
    font-size: 21pt;
    background-color: #222;
    border-radius: 15pt;
    color: black;
    padding: 3pt;
  }
  .headerbar {
	background-color: #999;
	padding: 5pt;
	color: white;
  border-radius: 99999px;
  width: fit-content;
	margin: 0 auto;
}
</style>
