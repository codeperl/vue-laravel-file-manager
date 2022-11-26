<template>
    <div class="fm-disk-list">
        <ul class="list-inline">
            <li class="list-inline-item" v-for="(disk, index) in disks" v-bind:key="index">
                <span
                    class="badge"
                    v-on:click="selectDisk(disk)"
                    v-bind:class="[disk === selectedDisk ? 'bg-secondary' : 'bg-light text-dark']"
                >
                    <i class="bi bi-hdd"></i> {{ disk }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DiskList',
    props: {
        // manager name - left or right
        manager: { type: String, required: true },
    },
    computed: {
        /**
         * Disk list
         * @returns {Array}
         */
        disks() {
            return this.$store.getters['fm/diskList'];
        },

        /**
         * Selected Disk for this manager
         * @returns {any}
         */
        selectedDisk() {
            return this.$store.state.fm[this.manager].selectedDisk;
        },
    },
    methods: {
        /**
         * Select disk
         * @param disk
         */
        // Mohammad Ashrafuddin Ferdousi : 3
        // Mohammad Ashrafuddin Ferdousi : 2
        selectDisk(disk) {
            if (this.selectedDisk !== disk) {
                // Mohammad Ashrafuddin Ferdousi : 2
                // Mohammad Ashrafuddin Ferdousi : 3
                this.$store.dispatch('fm/selectDisk', {
                    disk,
                    manager: this.manager,
                });
            }
        },
    },
};
</script>

<style lang="scss">
.fm-disk-list {
    ul.list-inline {
        margin-bottom: 0.5rem;
    }

    .badge.bg-light {
        cursor: pointer;
    }
}
</style>
