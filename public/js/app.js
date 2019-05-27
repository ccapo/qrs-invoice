const AddUpdateContact = {
  props: ['contact', 'title'],
  data() {
    return {
      id: this.contact ? this.contact.id : null,
      firstName: this.contact ? this.contact.firstName : '',
      lastName: this.contact ? this.contact.lastName : '',
      phone: this.contact ? this.contact.phone : ''
    }
  },
  methods: {
    save() {
      this.$emit('save-contact', { id: this.id, firstName: this.firstName, lastName: this.lastName, phone: this.phone })
      if (!this.id) {
        this.firstName = ''
        this.lastName = ''
        this.phone = ''
      }
    }
  },
  template: `
    <form class="form" @submit.prevent="save">
      <h3 class='subtitle'>{{ title }}</h3>
      <div class="field">
          <label>First Name</label>
          <div class="control">
            <input class="input" type="text" v-model="firstName">
          </div> 
      </div>
      <div class="field">
          <label>Last Name</label>
          <div class="control">
            <input class="input" type="text" v-model="lastName">
          </div> 
      </div>
      <div class="field">
          <label>Phone</label>
          <div class="control">
            <input class="input" type="text" v-model="phone">
          </div> 
      </div>
      <div class="field">
          <div class="control">
            <button class="button is-success">Save</button>
          </div> 
      </div>
    </form>
  `
}

const Contact = {
  props: ['contact'],
  components: { 'add-update-contact': AddUpdateContact },
  data() {
    return {
      showDetail: false
    }
  },
  methods: {
    onAddOrUpdateContact(contact) {
      this.$emit('save-contact', contact)
    },
    deleteContact(contact) {
      this.$emit('delete-contact', contact)
    }
  },
  template: `
    <div class="card">
      <header class="card-header">
        <p @click="showDetail = !showDetail" class="card-header-title">
          {{ contact.firstName }} {{ contact.lastName }}
        </p>
        <a class="card-header-icon" @click.stop="deleteContact(contact)">
          <span class="icon">
            <i class="fa fa-trash"></i>
          </span>
        </a>
      </header>
      <div v-show="showDetail" class="card-content">
          <add-update-contact title="Details" :contact="contact" @save-contact="onAddOrUpdateContact" />
      </div>
    </div>
  `
}

const Tabs = {
  template: `
      <div>
          <div class="tabs">
            <ul>
              <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
              </li>
            </ul>
          </div>

          <div class="tabs-details">
              <slot></slot>
          </div>
      </div>
  `,
  data() {
    return {tabs: []};
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}

const Tab = {
  template: `
      <div v-show="isActive"><slot></slot></div>
  `,
  props: {
    name: {required: true},
    selected: {default: false}
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    href() {
      return this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
}

new Vue({
  el: '#app',
  components: { contact: Contact, 'add-update-contact': AddUpdateContact, tabs: Tabs, tab: Tab },
  data: {
    contacts: [],
    apiURL: 'http://localhost/' //'https://qrs-invoice.glitch.me/login'
  },
  methods: {
    onAddOrUpdateContact(contact) {
      if (contact.id) {
        this.updateContact(contact)
      } else {
        this.addContact(contact)
      }
    },
    addContact(contact) {
      return axios.post(this.apiURL, contact).then((response) => {
        const copy = this.contacts.slice()
        copy.push(response.data)
        this.contacts = copy
      })
    },
    updateContact(contact) {
      return axios.put(`${this.apiURL}/${contact.id}`, contact).then((response) => {
        const copy = this.contacts.slice()
        const idx = copy.findIndex((c) => c.id === response.data.id)
        copy[idx] = response.data
        this.contacts = copy
      })
    },
    deleteContact(contact) {
      console.log('deleting', contact)
      return axios.delete(`${this.apiURL}/${contact.id}`).then((response) => {
        let copy = this.contacts.slice()
        const idx = copy.findIndex((c) => c.id === response.data.id)
        copy.splice(idx, 1)
        this.contacts = copy
      })
    }
  },
  beforeMount() {
    axios.get(this.apiURL).then((response) => {
      this.contacts = response.data
    })
  }
})
