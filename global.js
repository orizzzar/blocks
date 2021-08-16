export const state = {
    instances: [],
};

export const canvas = document.createElement('canvas');
document.body.append(canvas);

export const ctx = canvas.getContext('2d');
