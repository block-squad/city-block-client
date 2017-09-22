<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="title">Projects</p>
            <ul>
              <li v-for="project in contributedProjects">
                {{project}}
              </li>
            </ul>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">Proposals</p>
            <ul>
              <li v-for="proposal in proposedProjects">
                {{proposal.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="title">Contributions</p>
            <br>
            <p class="subtitle">{{amountContributed}} Ether</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

const url = "https://city-block-server.herokuapp.com"

export default {
  name: 'hero',
  computed: {
    getUserId: function(){
      let id = localStorage.getItem('userId');
      if (id) {
        this.currUser = parseInt(id);
      }
    },
  },
  data(){
    return {
      currUser: "",
      contributedProjects: [],
      proposedProjects: [],
      amountContributed: 0
    }
  },
  async mounted() {
    let id = parseInt(localStorage.getItem('userId'))
    const data = await Promise.all([
      fetch(`${url}/accounts/${id == undefined ? '' : id }`),
      fetch(`${url}/projects`)
    ])
    const response1 = await data[0].json();
    const response2 = await data[1].json();
    let projectList = [];
    response1[0].contributions.forEach((e)=>{
      if (!projectList.includes(e.name)) {
        projectList.push(e.name)
      }
    });
    this.contributedProjects = projectList
    this.amountContributed = response1[0].contributions.reduce((a,b)=>{
      return a + b.amount_contributed
    }, 0)
    this.proposedProjects = response2.filter((e) => {
      return e.owner_id === id
    })
  },
}
</script>
