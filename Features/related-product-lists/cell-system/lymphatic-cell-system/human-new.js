/*
 * @Author: Jinqi Li
 * @Date: 2021-03-16 14:34:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-03-16 16:23:53
 * @FilePath: \ScienCell-Frontend\Features\lymphatic-cell-system\human-new.js
 */
let newList = `
<div class="sciencell-col-12 category-text">
    <br><span><strong>Related Primary Animal Cell Products</strong></span><br><br>

    <div class="block-content">
        <ol class="products-list" id="">

            <div class="product-shop">
                <div class="f-fix">
                </div>
            </div>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                </tbody>
            </table>
            <div class="product-shop">
                <div class="f-fix">
                </div>
            </div>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">

                <tbody>
                    <tr>
                        <td align="left" width="20%" height="25"><a
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-fibroblasts.html"
                                title="Mouse Lymphatic Fibroblasts from CD1">M2530</a></td>
                        <td width="15%">MLF</td>
                        <td width="70%"><a title="HematoGro Medium"
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-fibroblasts.html">Mouse
                                Lymphatic Fibroblasts from CD1</a></td>
                    </tr>

                </tbody>
            </table>
            <div class="product-shop">
                <div class="f-fix">
                </div>
            </div>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">

                <tbody>
                    <tr>
                        <td align="left" width="20%" height="25"><a
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-fibroblasts-252.html"
                                title="Mouse Lymphatic Fibroblasts from C57BL/6">M2530-57</a></td>
                        <td width="15%">MLF</td>
                        <td width="70%"><a title="HematoGro Medium"
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-fibroblasts-252.html">Mouse
                                Lymphatic Fibroblasts from C57BL/6</a></td>
                    </tr>

                </tbody>
            </table>
            <div class="product-shop">
                <div class="f-fix">
                </div>
            </div>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">

                <tbody>
                    <tr>
                        <td align="left" width="20%" height="25"><a
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-mononuclear-cells.html"
                                title="Mouse Lymphatic Mononuclear Cells from CD1">M2540</a></td>
                        <td width="15%">MLMC</td>
                        <td width="70%"><a title="HematoGro Medium"
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-mononuclear-cells.html">Mouse
                                Lymphatic Mononuclear Cells from CD1</a></td>
                    </tr>

                </tbody>
            </table>
            <div class="product-shop">
                <div class="f-fix">
                </div>
            </div>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">

                <tbody>
                    <tr>
                        <td align="left" width="20%" height="25"><a
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-mononuclear-cells-2356.html"
                                title="Mouse Lymphatic Mononuclear Cells from C57BL/6">M2540-57</a></td>
                        <td width="15%">MLMC</td>
                        <td width="70%"><a title="HematoGro Medium"
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/mouse-lymphatic-mononuclear-cells-2356.html">Mouse
                                Lymphatic Mononuclear Cells from C57BL/6</a></td>
                    </tr>

                </tbody>
            </table>
            <div class="product-shop">
                <div class="f-fix">
                </div>
            </div>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">

                <tbody>
                    <tr>
                        <td align="left" width="20%" height="25"><a
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/rat-lymphatic-fibroblasts.html"
                                title="Rat Lymphatic Fibroblasts">R2530</a></td>
                        <td width="15%">RLF</td>
                        <td width="70%"><a title="HematoGro Medium"
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/rat-lymphatic-fibroblasts.html">Rat
                                Lymphatic Fibroblasts</a></td>
                    </tr>

                </tbody>
            </table>
            <table style="width: 100%;" border="0" cellspacing="0" cellpadding="0">

                <tbody>
                    <tr>
                        <td align="left" width="20%" height="25"><a
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/rat-lymphatic-mononuclear-cells.html"
                                title="Rat Lymphatic Mononuclear Cells">R2540</a></td>
                        <td width="15%">RLMC</td>
                        <td width="70%"><a title="HematoGro Medium"
                                href="/products-services/primary-cells/animal/cell-systems/lymphatic-cell-system/rat-lymphatic-mononuclear-cells.html">Rat
                                Lymphatic Mononuclear Cells</a></td>
                    </tr>

                </tbody>
            </table>

        </ol>
    </div>
</div>
`

let newDiv = document.querySelector('.categorypath-products-services-primary-cells-human-cell-systems-lymphatic-cell-system .column.main');
let newEle = document.createElement('div');
newEle.innerHTML = newList;
newDiv.appendChild(newEle);


var animalList = "<div class='sciencell-col-12 category-text'><br><span><strong>Related  Primary Human Cell Products</strong></span><br><br><div class='block-content'><ol class='products-list' id=''><div class='product-shop'><div></div></div><table style='width: 100%;' border='0' cellspacing='0' cellpadding='0'><tbody></tbody></table><div class='product-shop'><div></div></div><table style='width: 100%;' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td align='left' width='20%' height='25'><a href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-lymphatic-endothelial-cells.html' title='Human Lymphatic Endothelial Cells'>2500</a></td><td width='15%'>HLEC</td><td width='70%'><a title='HematoGro Medium' href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-lymphatic-endothelial-cells.html'>Human Lymphatic Endothelial Cells</a></td></tr></tbody></table><div class='product-shop'><div></div></div><table style='width: 100%;' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td align='left' width='20%' height='25'><a href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-lymphatic-fibroblasts.html' title='Human Lymphatic Fibroblasts'>2530</a></td><td width='15%'>HLF</td><td width='70%'><a title='HematoGro Medium' href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-lymphatic-fibroblasts.html'>Human Lymphatic Fibroblasts</a></td></tr></tbody></table><div class='product-shop'><div></div></div><table style='width: 100%;' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td align='left' width='20%' height='25'><a href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-lymphatic-mononuclear-cells.html' title='Human Lymphatic Mononuclear Cells'>2540</a></td><td width='15%'>HLyMC</td><td width='70%'><a title='HematoGro Medium' href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-lymphatic-mononuclear-cells.html'>Human Lymphatic Mononuclear Cells</a></td></tr></tbody></table><div class='product-shop'><div></div></div><table style='width: 100%;' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td align='left' width='20%' height='25'><a href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-thymic-epithelial-cells.html' title='Human Thymic Epithelial Cells'>3910</a></td><td width='15%'>HTyEpiC</td><td width='70%'><a title='HematoGro Medium' href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-thymic-epithelial-cells.html'>Human Thymic Epithelial Cells</a></td></tr></tbody></table><table style='width: 100%;' border='0' cellspacing='0' cellpadding='0'><tbody><tr><td align='left' width='20%' height='25'><a href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-thymus-fibroblasts.html' title='Human Thymic Fibroblasts'>3930</a></td><td width='15%'>HTyF</td><td width='70%'><a title='HematoGro Medium' href='/products-services/primary-cells/human/cell-systems/lymphatic-cell-system/human-thymus-fibroblasts.html'>Human Thymic Fibroblasts</a></td></tr></tbody></table></ol></div></div>"