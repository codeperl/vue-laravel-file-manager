<template>
    <div class="modal-content fm-modal-folder">
        <div class="modal-header">
            <h5 class="modal-title">{{ lang.modal.newFile.title }}</h5>
            <button type="button" class="btn-close" aria-label="Close" v-on:click="hideModal"></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="fm-file-name">{{ lang.modal.newFile.fieldName }}</label>
                <input
                    type="text"
                    class="form-control"
                    id="fm-file-name"
                    v-focus
                    v-bind:class="{ 'is-invalid': fileExist }"
                    v-model="fileName"
                    v-on:keyup="validateFileName"
                />
                <div class="invalid-feedback" v-show="fileExist">
                    {{ lang.modal.newFile.fieldFeedback }}
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-info" v-bind:disabled="!submitActive" v-on:click="addFile">
                {{ lang.btn.submit }}
            </button>
            <button type="button" class="btn btn-light" v-on:click="hideModal">{{ lang.btn.cancel }}</button>
        </div>
    </div>
</template>

<script>
import modal from '../mixins/modal';
import translate from '../../../mixins/translate';

export default {
    name: 'NewFileModal',
    mixins: [modal, translate],
    data() {
        return {
            // name for new file
            fileName: '',

            // file exist
            fileExist: false,
        };
    },
    computed: {
        /**
         * Submit button - active or no
         * @returns {string|boolean}
         */
        submitActive() {
            return this.fileName && !this.fileExist;
        },
    },
    methods: {
        /**
         * Check the file name if it exists or not.
         */
        validateFileName() {
            if (this.fileName) {
                this.fileExist = this.$store.getters[`fm/${this.activeManager}/fileExist`](this.fileName);
            } else {
                this.fileExist = false;
            }
        },

        /**
         * Create new file
         */
        // Mohammad Ashrafuddin Ferdousi : 11
        addFile() {
            // Mohammad Ashrafuddin Ferdousi : 11
            this.$store.dispatch('fm/createFile', this.fileName).then((response) => {
                if (response.data.result.status === 'success') {
                    this.hideModal();
                }
            });
        },
    },
};
</script>
