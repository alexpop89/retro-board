export default function fixMaterial() {
  if (typeof window.componentHandler !== 'undefined'){
    window.componentHandler.upgradeAllRegistered();
  }
}
