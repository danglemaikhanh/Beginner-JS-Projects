export const ICON_MAP = new Map()

addMapping([0, 1], 'bx-sun');
addMapping([2, 3], 'bx-cloud');
addMapping([51, 53, 55, 56, 57], 'bx-cloud-drizzle');
addMapping([61, 63, 65, 66, 67, 80, 81, 82], 'bx-cloud-rain');
addMapping([85, 86, 95, 96, 99], 'bx-cloud-lightning');
addMapping([71, 73, 74, 75, 77], 'bx-cloud-snow');

function addMapping(values, icon) {
    values.forEach(val => {
        ICON_MAP.set(val, icon)
    });
}
