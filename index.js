//Importar la librería de Playwright
const playwright = require('playwright');

async function main() {
    // Abrir un Chromium browser con headless false para ver lo que sucede. SlowMo 50 según solicitado.

    const browser = await playwright.chromium.launch({
        headless: false, slowMo: 50
    });
    // Abrir una nueva página en el browser.
    const page = await browser.newPage();
    // Elegir a que página ir.
    await page.goto('https://web.gencat.cat/ca/inici');

    //Aquí elegi los elementos por xpath.
    await page.focus('//input[@id="cercadorOcultGoogle"]');
    await page.click('//input[@id="cercadorOcultGoogle"]');
    await page.fill('//input[@id="cercadorOcultGoogle"]', 'agenda cultural')
    await page.click('//input[@aria-label="Cercar"]');


    // Pausa de 10 segundos para ver que sucede.
    await page.waitForTimeout(10000);
    // Cerrar el browser.
    await browser.close();
}
main();