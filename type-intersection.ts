// Intersection
type LeftType = {
	id: number;
	left: string;
};
type RightType = {
    id:number;
    right: string;
    name : string;
}

type IntersectionType = LeftType & RightType;

function showIntersection( args : IntersectionType) : void {
    console.log(args);
}

showIntersection({ id:1,left:"Eduardo",right:"Maciel",name:"Eduardo Maciel" });