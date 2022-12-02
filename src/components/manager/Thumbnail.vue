<template>
    <figure class="fm-thumbnail">
        <transition name="fade" mode="out-in">
            <div class="spinner-border spinner-border-lg text-muted my-2" v-if="!src">
                <span class="visually-hidden">Loading...</span>
            </div>
            <img v-else v-bind:src="src" v-bind:alt="file.filename" class="img-thumbnail" />
        </transition>
    </figure>
</template>

<script>
import GET from '../../http/get';

export default {
    name: 'Thumbnail',
    data() {
        return {
            src: '',
        };
    },
    props: {
        disk: {
            type: String,
            required: true,
        },
        file: {
            type: Object,
            required: true,
        },
    },
    watch: {
        'file.timestamp': 'loadImage',
    },
    mounted() {
        if (window.IntersectionObserver) {
            try {
                const observer = new IntersectionObserver(
                    (entries, obs) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                this.loadImage();
                                obs.unobserve(this.$el);
                            }
                        });
                    },
                    {
                        root: null,
                        /*threshold: '0.5',*/
                        threshold: '0.1',
                    }
                );

                // add observer for template
                observer.observe(this.$el);
            } catch(e) {
                this.loadImage();
            }

        } else {
            this.loadImage();
        }
        //this.loadImage();
    },
    computed: {
        /**
         * Authorization required
         * @return {*}
         */
        auth() {
            return this.$store.getters['fm/settings/authHeader'];
        },
    },
    methods: {
        /**
         * Load image
         */
        // Mohammad Ashrafuddin Ferdousi : 8
        loadImage() {
            // if authorization required
            if (this.auth) {
                // Mohammad Ashrafuddin Ferdousi : 8
                GET.thumbnail(this.disk, this.file.path).then((response) => {
                    // FIXED: Mohammad Ashrafuddin Ferdousi
                    const mimeType = response.data.headers['Content-Type'].toLowerCase();
                    //const imgBase64 = Buffer.from(response.data, 'binary').toString('base64');
                    this.src = `data:${mimeType};base64,${response.data.data}`;
                });
                /*this.src = `${this.$store.getters['fm/settings/baseUrl']}thumbnails?disk=${
                    this.disk
                }&path=${encodeURIComponent(this.file.path)}&v=${this.file.timestamp}&token=${window.localStorage.getItem('_token')}`;*/
            } else {
                this.src = `${this.$store.getters['fm/settings/baseUrl']}thumbnails?disk=${
                    this.disk
                }&path=${encodeURIComponent(this.file.path)}&v=${this.file.timestamp}`;
            }
        },
    },
};
</script>

<style lang="scss">
.fm-thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;

    .img-thumbnail {
        width: 88px;
        height: 88px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>
