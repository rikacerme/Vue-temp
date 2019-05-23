<template>
  <div class="editarea">
    <div>
      <div class="editfields">
        <div>
          <label>id: </label>
          <input v-if="addingPerson" type="number" v-model="editingPerson.id" ref="id" placeholder="id" />
          <label v-if="!addingPerson" class="value">{{editingPerson.id}}</label>
        </div>
        <div>
          <label>name: </label>
          <input v-model="editingPerson.name" ref="name" placeholder="name" />
        </div>
        <div>
          <label>birth year: </label>
          <input v-model="editingPerson.birth_year" placeholder="birth year" @keyup.enter="save" />
        </div>
      </div>
      <button @click="clear">Cancel</button>
      <button @click="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      default() {},
    },
  },

  data() {
    return {
      addingPerson: !this.person,
      editingPerson: { ...this.person },
    };
  },

  watch: {
    person(newPerson, originalPerson) {
      console.log(newPerson.name);
      console.log(originalPerson.name);
      this.editingPerson = { ...this.person };
      this.setFocus();
    },
  },

  mounted() {
    this.setFocus();
  },

  methods: {
    setFocus() {
      if (this.addingPerson && this.editingPerson) {
        this.$refs.id.focus();
      } else {
        this.$refs.name.focus();
      }
    },

    addPerson() {
      this.emitRefresh('add');
    },

    clear() {
      this.$emit('unselect');
      this.editingPerson = null;
    },

    emitRefresh(mode) {
      this.$emit('personChanged', { mode, person: this.editingPerson });
      this.clear();
    },

    save() {
      this.addingPerson ? this.addPerson() : this.updatePerson();
    },

    updatePerson() {
      this.emitRefresh('update');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles.scss';
.editarea {
  @include editarea;
}
</style>
