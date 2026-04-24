export function daysBetween(a: any, b: any) {
    const msPerDay = 86400000;
    return Math.floor((b.getTime() - a.getTime()) / msPerDay);
}
