<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190108162247 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product ADD sub_category_id INT NOT NULL, ADD stock_status_id INT NOT NULL, ADD product_brand_id INT NOT NULL, CHANGE description description VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADF7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04ADF36AE655 FOREIGN KEY (stock_status_id) REFERENCES stock_status (id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD8F45BA9F FOREIGN KEY (product_brand_id) REFERENCES product_brand (id)');
        $this->addSql('CREATE INDEX IDX_D34A04ADF7BFE87C ON product (sub_category_id)');
        $this->addSql('CREATE INDEX IDX_D34A04ADF36AE655 ON product (stock_status_id)');
        $this->addSql('CREATE INDEX IDX_D34A04AD8F45BA9F ON product (product_brand_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADF7BFE87C');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04ADF36AE655');
        $this->addSql('ALTER TABLE product DROP FOREIGN KEY FK_D34A04AD8F45BA9F');
        $this->addSql('DROP INDEX IDX_D34A04ADF7BFE87C ON product');
        $this->addSql('DROP INDEX IDX_D34A04ADF36AE655 ON product');
        $this->addSql('DROP INDEX IDX_D34A04AD8F45BA9F ON product');
        $this->addSql('ALTER TABLE product DROP sub_category_id, DROP stock_status_id, DROP product_brand_id, CHANGE description description LONGTEXT NOT NULL COLLATE utf8mb4_unicode_ci');
    }
}
