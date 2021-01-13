<template>
  <div>
    <div v-if="storage.userCity.id > 0" class="user-place">
      <div class="city tag">
        {{ storage.userCity.name.toUpperCase() }}
      </div>
      <div class="state tag">
        {{ storage.userState.code }}
      </div>
    </div>
    <div v-else class="add-button">Selecione seu local</div>
  </div>
</template>

<style lang="scss">
.user-place {
  display: flex;
  margin-left: 0.5em;

  @include mobile {
    font-size: 0.6em;
  }
}

.tag {
  color: white;
  padding: 4px 16px 4px 16px;
  font-weight: bold;

  @include mobile {
    padding: 4px 10px 4px 10px;
  }
}

.city {
  background-color: rgb(30, 83, 145);
  flex-grow: 1;
  border-radius: 1em 0 0 1em;
}

.state {
  background-color: rgb(27, 56, 85);
  margin-right: 1em;
  border-radius: 0 1em 1em 0;
}

.add-button {
  color: white;
  cursor: pointer;
  font-weight: bold;
  background-color: rgb(30, 83, 145);
  line-height: 30px;
  padding: 2px 16px 2px 16px;
  border-radius: 0.8em;
  margin-right: 1em;
  box-shadow: 0 1px 0 0 #424242;

  &:hover {
    background-color: rgb(27, 56, 85);
  }
}
</style>
