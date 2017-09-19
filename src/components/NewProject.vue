<template>
  <section class="newproject section container">
    <form>
      <b-field label="Project Name">
        <b-input type="text"></b-input>
      </b-field>
      <b-field label="Type">
        <b-select placeholder="Select type">
          <option>Parks / Rec</option>
          <option>Streets / Roads</option>
          <option>Education</option>
          <option>Building</option>
          <option>Culture</option>
          <option>Environment</option>
        </b-select>
      </b-field>
      <b-field label="Description">
        <b-input type="textarea"></b-input>
      </b-field>
      <b-field label="Target Amount">
        <b-input type="text" placeholder="0.00"></b-input>
      </b-field>
      <b-field label="Deadline">
        <b-input type="date"></b-input>
      </b-field>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link">Cancel</button>
        </div>
      </div>
    </form>

  </section>

</template>

<script>
export default {
  name: 'newproject'
}
</script>
