class LazyLoadHelper {
    public constructor(private element: HTMLElement) {}

    public loadImage() {
        const imageElement: any = Array.from(this.element.children).find((el) =>
            el.nodeName === 'IMG'
        );

        if (imageElement) {
            imageElement.addEventListener('load', () => {
                setTimeout(() => this.element.classList.add('loaded'), 100);
            });

            imageElement.addEventListener('error', () => console.log('error'));

            imageElement.src = imageElement.dataset.url;
        }
    }

    public createObserver(handleIntersect: any) {
        const options = {
            // circumstances under which the observer's callback is invoked
            root: null, // defaults to the browser viewport if not specified or if null
            threshold: 1 // the degree of intersection between the target element and its root (0 - 1)
            // threshold of 1.0 means that when 100% of the target is visible within
            //the element specified by the root option, the callback is invoked
        } as IntersectionObserverInit;

        // Whether you're using the viewport or some other element as the root,the API works the same way,
        // executing a callback function you provide whenever the visibility of the target element changes
        // so that it crosses desired amounts of intersection with the root

        const observer = new IntersectionObserver(handleIntersect, options);

        observer.observe(this.element); // target element to watch
    }
}

/* tslint:disable:variable-name */

const LazyLoadDirective = {
    inserted: (element: HTMLElement) => {
        const helper = new LazyLoadHelper(element);

        if (!window['IntersectionObserver']) {
            helper.loadImage();
        } else {
            const handleIntersect = (entries: any[], observer: any) => {
                entries.forEach((entry: any) => {
                    if (entry.isIntersecting) {
                        helper.loadImage();
                        observer.unobserve(element);
                    }
                });
            };

            helper.createObserver(handleIntersect);
        }
    }
};

/* tslint:enable:variable-name */

export default LazyLoadDirective;
