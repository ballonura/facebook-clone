<template>
  <div class="flex items-center justify-between header-shadow px-4">
    <div class="flex items-center flex-shrink-0">
      <div>
        <transition name="fade" mode="out-in">
          <!-- prettier-ignore -->
          <svg v-if="!searchFocus" class="w-10 mr-3 cursor-pointer" viewBox="0 0 36 36" fill="url(#jsc_s_2)"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path fill="#ffffff" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>
          <div v-else class="arrow">
            <!-- prettier-ignore -->
            <svg class="w-5 cursor-pointer" viewBox="0 0 512 512"><g><g><path d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068 l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019 l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492 c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
        </transition>
      </div>
      <div class="relative">
        <input @focus="searchFocus = true" @blur="searchFocus = false" type="text" placeholder="Search Facebook" class="pl-8 pr-4 py-2 text-gray-200 bg-gray-300 rounded-full placeholder-gray-400 focus:outline-none" />
        <!-- prettier-ignore -->
        <svg class="fill-current search-icon" viewBox="0 0 512.005 512.005"><g><g><path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
      </div>
    </div>
    <div>2</div>
    <div class="relative flex items-center">
      <div class="user">
        <img src="@/assets/images/nitzan.jpg" class="rounded-full mr-2" style="width: 1.75rem;" />
        <p class="text-gray-200 font-semibold">Nitzan</p>
      </div>
      <div @click="subHeaderClick('create')" class="rounded-full bg-gray-600 hover:bg-gray-300 flex justify-center items-center w-10 h-10 mr-2 cursor-pointer" :class="{ 'subHeaderLink--active': activeSubHeaderTab === 'create' }">
        <!-- prettier-ignore -->
        <svg class="fill-current w-4" viewBox="0 0 512 512"><g><g><path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216 v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
      </div>
      <div @click="subHeaderClick('messenger')" class="fill-current rounded-full bg-gray-600 hover:bg-gray-300 flex justify-center items-center w-10 h-10 mr-2 cursor-pointer" :class="{ 'subHeaderLink--active': activeSubHeaderTab === 'messenger' }">
        <!-- prettier-ignore -->
        <svg class="fill-current w-5" viewBox="0 0 28 28"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>
      </div>
      <div @click="subHeaderClick('notifications')" class="rounded-full bg-gray-600 hover:bg-gray-300 flex justify-center items-center w-10 h-10 mr-2 cursor-pointer" :class="{ 'subHeaderLink--active': activeSubHeaderTab === 'notifications' }">
        <!-- prettier-ignore -->
        <svg class="fill-current w-5" viewBox="0 0 28 28"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path></svg>
      </div>
      <div @click="subHeaderClick('account')" class=" relative rounded-full bg-gray-600 hover:bg-gray-300 flex justify-center items-center w-10 h-10 mr-2 cursor-pointer" :class="{ 'subHeaderLink--active': activeSubHeaderTab === 'account' }">
        <!-- prettier-ignore -->
        <svg class="fill-current w-4" viewBox="0 0 255 255"><g><g id="arrow-drop-down"><polygon points="0,63.75 127.5,191.25 255,63.75"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        <div class="rounded-full border-2 border-white bg-red absolute right-0 top-0" style="width: 0.875rem; height: 0.875rem;"></div>
      </div>

      <div class="subHeaderMenu" :class="{ open: isSubHeaderMenuOpen }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSubHeaderTab: "",
      isSubHeaderMenuOpen: false,
      searchFocus: false
    };
  },
  methods: {
    subHeaderClick(subHeader) {
      if (this.isSubHeaderMenuOpen) {
        if (subHeader === this.activeSubHeaderTab) {
          this.isSubHeaderMenuOpen = false;
          this.activeSubHeaderTab = "";
        } else {
          this.activeSubHeaderTab = subHeader;
        }
      } else {
        this.isSubHeaderMenuOpen = true;
        this.activeSubHeaderTab = subHeader;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.subHeaderMenu {
  top: 3rem;

  @apply absolute right-0 bg-white header-shadow rounded-md h-0 w-0 transition-all duration-200;

  &.open {
    height: 35rem;
    width: 22.5rem;
  }
}

.subHeaderLink {
  &--active {
    color: blue;
  }
}

.header {
  &-shadow {
    box-shadow: 0px 1px 4px 0px rgba(140, 140, 140, 0.5);
  }
}

.search-icon {
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  transition: 150ms;

  @apply absolute text-gray-400 w-4;
}

.arrow {
  @apply w-10 h-10 flex justify-center items-center mr-3 rounded-full;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.user {
  @apply flex items-center mr-4 rounded-full p-1 cursor-pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.125s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-55px);
}
</style>
