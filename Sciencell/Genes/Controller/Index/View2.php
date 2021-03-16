<?php
/* Controller for menu.phtml to display genes
 * Created 10/29/20
 */
namespace Sciencell\Genes\Controller\Page;
class View extends \Magento\Framework\App\Action\Action
{
    protected $_resultPageFactory;
 
    public function __construct(
        \Magento\Framework\App\Action\Context $context, 
        \Magento\Framework\View\Result\PageFactory $resultPageFactory)
    {
        $this->_resultPageFactory = $resultPageFactory;
        parent::__construct($context);
    }
 
    public function execute()
    {
        $resultPage = $this->_resultPageFactory->create();
        return $resultPage;
    }
}
?>